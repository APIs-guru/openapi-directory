import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetVersionLocationsMarkersFormatIncidentTypeEnum {
    Crash = "crash",
    Hazard = "hazard",
    Theft = "theft",
    Unconfirmed = "unconfirmed",
    InfrastructureIssue = "infrastructure_issue",
    ChopShop = "chop_shop"
}


export class GetVersionLocationsMarkersFormatQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=all" })
  all?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=incident_type" })
  incidentType?: GetVersionLocationsMarkersFormatIncidentTypeEnum;

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


export class GetVersionLocationsMarkersFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetVersionLocationsMarkersFormatQueryParams;
}


export class GetVersionLocationsMarkersFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
