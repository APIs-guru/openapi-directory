import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposListCollaboratorsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum ReposListCollaboratorsAffiliationEnum {
    Outside = "outside"
,    Direct = "direct"
,    All = "all"
}


export class ReposListCollaboratorsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=affiliation" })
  affiliation?: ReposListCollaboratorsAffiliationEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ReposListCollaboratorsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposListCollaboratorsPathParams;

  @Metadata()
  queryParams: ReposListCollaboratorsQueryParams;
}


export class ReposListCollaboratorsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata({ elemType: shared.Collaborator })
  collaborators?: shared.Collaborator[];
}
