import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDomainRecordPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domain_name" })
  domainName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=domain_record_id" })
  domainRecordId: number;
}


export class GetDomainRecordRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDomainRecordPathParams;
}


export class GetDomainRecord401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetDomainRecordResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDomainRecord200ApplicationJsonAny?: any;

  @Metadata()
  getDomainRecord401ApplicationJsonObject?: GetDomainRecord401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
