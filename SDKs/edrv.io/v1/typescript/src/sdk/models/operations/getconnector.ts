import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetConnectorPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetConnectorQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_evse" })
  includeEvse?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_organization" })
  includeOrganization?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_rate" })
  includeRate?: boolean;
}


export class GetConnectorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetConnectorPathParams;

  @SpeakeasyMetadata()
  queryParams: GetConnectorQueryParams;
}


export class GetConnectorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
