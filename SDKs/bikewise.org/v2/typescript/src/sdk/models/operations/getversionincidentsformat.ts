import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetVersionIncidentsFormatIncidentTypeEnum {
    Crash = "crash"
,    Hazard = "hazard"
,    Theft = "theft"
,    Unconfirmed = "unconfirmed"
,    InfrastructureIssue = "infrastructure_issue"
,    ChopShop = "chop_shop"
}


export class GetVersionIncidentsFormatQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=incident_type" })
  incidentType?: GetVersionIncidentsFormatIncidentTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=occurred_after" })
  occurredAfter?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=occurred_before" })
  occurredBefore?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=proximity" })
  proximity?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=proximity_square" })
  proximitySquare?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}


export class GetVersionIncidentsFormatRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetVersionIncidentsFormatQueryParams;
}


export class GetVersionIncidentsFormatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
