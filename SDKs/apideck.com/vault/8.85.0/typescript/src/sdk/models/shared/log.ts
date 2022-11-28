import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LogOperation
/** 
 * The request as defined in OpenApi Spec.
**/
export class LogOperation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


// LogService
/** 
 * Apideck service provider associated with request.
**/
export class LogService extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}

export enum LogUnifiedApiEnum {
    Crm = "crm",
    Lead = "lead",
    Proxy = "proxy",
    Vault = "vault",
    Accounting = "accounting",
    Hris = "hris",
    Ats = "ats",
    Pos = "pos",
    FileStorage = "file-storage",
    Sms = "sms"
}


export class Log extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=api_style" })
  apiStyle: string;

  @SpeakeasyMetadata({ data: "json, name=base_url" })
  baseUrl: string;

  @SpeakeasyMetadata({ data: "json, name=child_request" })
  childRequest: boolean;

  @SpeakeasyMetadata({ data: "json, name=consumer_id" })
  consumerId: string;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration: number;

  @SpeakeasyMetadata({ data: "json, name=error_message" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=execution" })
  execution: number;

  @SpeakeasyMetadata({ data: "json, name=has_children" })
  hasChildren: boolean;

  @SpeakeasyMetadata({ data: "json, name=http_method" })
  httpMethod: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=latency" })
  latency: number;

  @SpeakeasyMetadata({ data: "json, name=operation" })
  operation: LogOperation;

  @SpeakeasyMetadata({ data: "json, name=parent_id" })
  parentId: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path: string;

  @SpeakeasyMetadata({ data: "json, name=sandbox" })
  sandbox: boolean;

  @SpeakeasyMetadata({ data: "json, name=service" })
  service: LogService;

  @SpeakeasyMetadata({ data: "json, name=source_ip" })
  sourceIp?: string;

  @SpeakeasyMetadata({ data: "json, name=status_code" })
  statusCode: number;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success: boolean;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: string;

  @SpeakeasyMetadata({ data: "json, name=unified_api" })
  unifiedApi: LogUnifiedApiEnum;
}
