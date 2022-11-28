import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetVersionLocationsFormatIncidentTypeEnum {
    Crash = "crash",
    Hazard = "hazard",
    Theft = "theft",
    Unconfirmed = "unconfirmed",
    InfrastructureIssue = "infrastructure_issue",
    ChopShop = "chop_shop"
}


export class GetVersionLocationsFormatQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=all" })
  all?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=incident_type" })
  incidentType?: GetVersionLocationsFormatIncidentTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=occurred_after" })
  occurredAfter?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=occurred_before" })
  occurredBefore?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=proximity" })
  proximity?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=proximity_square" })
  proximitySquare?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}


export class GetVersionLocationsFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetVersionLocationsFormatQueryParams;
}


export class GetVersionLocationsFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
