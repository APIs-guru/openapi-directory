import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetConnectorPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetConnectorQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=include_evse" })
  includeEvse?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_organization" })
  includeOrganization?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_rate" })
  includeRate?: boolean;
}


export class GetConnectorRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetConnectorPathParams;

  @Metadata()
  queryParams: GetConnectorQueryParams;
}


export class GetConnectorResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
