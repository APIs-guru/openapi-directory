import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetVersionIncidentsFormatIncidentTypeEnum {
    Crash = "crash",
    Hazard = "hazard",
    Theft = "theft",
    Unconfirmed = "unconfirmed",
    InfrastructureIssue = "infrastructure_issue",
    ChopShop = "chop_shop"
}


export class GetVersionIncidentsFormatQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=incident_type" })
  incidentType?: GetVersionIncidentsFormatIncidentTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=occurred_after" })
  occurredAfter?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=occurred_before" })
  occurredBefore?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=proximity" })
  proximity?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=proximity_square" })
  proximitySquare?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}


export class GetVersionIncidentsFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetVersionIncidentsFormatQueryParams;
}


export class GetVersionIncidentsFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
