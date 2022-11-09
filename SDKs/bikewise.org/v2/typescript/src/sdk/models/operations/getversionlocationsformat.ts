import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetVersionLocationsFormatIncidentTypeEnum {
    Crash = "crash"
,    Hazard = "hazard"
,    Theft = "theft"
,    Unconfirmed = "unconfirmed"
,    InfrastructureIssue = "infrastructure_issue"
,    ChopShop = "chop_shop"
}


export class GetVersionLocationsFormatQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=all" })
  all?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=incident_type" })
  incidentType?: GetVersionLocationsFormatIncidentTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=occurred_after" })
  occurredAfter?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=occurred_before" })
  occurredBefore?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=proximity" })
  proximity?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=proximity_square" })
  proximitySquare?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}


export class GetVersionLocationsFormatRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetVersionLocationsFormatQueryParams;
}


export class GetVersionLocationsFormatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
