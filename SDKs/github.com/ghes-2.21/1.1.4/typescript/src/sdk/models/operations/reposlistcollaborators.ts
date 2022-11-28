import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposListCollaboratorsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum ReposListCollaboratorsAffiliationEnum {
    Outside = "outside",
    Direct = "direct",
    All = "all"
}


export class ReposListCollaboratorsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=affiliation" })
  affiliation?: ReposListCollaboratorsAffiliationEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ReposListCollaboratorsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposListCollaboratorsPathParams;

  @SpeakeasyMetadata()
  queryParams: ReposListCollaboratorsQueryParams;
}


export class ReposListCollaboratorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata({ elemType: shared.Collaborator })
  collaborators?: shared.Collaborator[];
}
