import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OrgsListOutsideCollaboratorsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}

export enum OrgsListOutsideCollaboratorsFilterEnum {
    TwofaDisabled = "2fa_disabled",
    All = "all"
}


export class OrgsListOutsideCollaboratorsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: OrgsListOutsideCollaboratorsFilterEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class OrgsListOutsideCollaboratorsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OrgsListOutsideCollaboratorsPathParams;

  @SpeakeasyMetadata()
  queryParams: OrgsListOutsideCollaboratorsQueryParams;
}


export class OrgsListOutsideCollaboratorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.SimpleUser })
  simpleUsers?: shared.SimpleUser[];
}
