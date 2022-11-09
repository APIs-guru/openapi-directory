import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteDomainRecordPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domain_name" })
  domainName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=domain_record_id" })
  domainRecordId: number;
}


export class DeleteDomainRecordRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteDomainRecordPathParams;
}


export class DeleteDomainRecord401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class DeleteDomainRecordResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteDomainRecord401ApplicationJsonObject?: DeleteDomainRecord401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
