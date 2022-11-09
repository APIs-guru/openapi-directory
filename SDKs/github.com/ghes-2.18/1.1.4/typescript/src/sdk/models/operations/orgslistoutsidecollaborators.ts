import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OrgsListOutsideCollaboratorsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}

export enum OrgsListOutsideCollaboratorsFilterEnum {
    TwofaDisabled = "2fa_disabled"
,    All = "all"
}


export class OrgsListOutsideCollaboratorsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: OrgsListOutsideCollaboratorsFilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class OrgsListOutsideCollaboratorsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OrgsListOutsideCollaboratorsPathParams;

  @Metadata()
  queryParams: OrgsListOutsideCollaboratorsQueryParams;
}


export class OrgsListOutsideCollaboratorsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.SimpleUser })
  simpleUsers?: shared.SimpleUser[];
}
