import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateDomainRecordPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domain_name" })
  domainName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=domain_record_id" })
  domainRecordId: number;
}


export class UpdateDomainRecordRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateDomainRecordPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Onev21domains1Percent7BdomainNamePercent7D1recordsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDomainRecordsItems;
}


export class UpdateDomainRecord401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class UpdateDomainRecordResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateDomainRecord200ApplicationJsonAny?: any;

  @Metadata()
  updateDomainRecord401ApplicationJsonObject?: UpdateDomainRecord401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
