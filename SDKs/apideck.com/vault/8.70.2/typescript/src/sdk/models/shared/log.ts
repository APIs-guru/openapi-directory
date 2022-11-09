import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LogOperation
/** 
 * The request as defined in OpenApi Spec.
**/
export class LogOperation extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}


// LogService
/** 
 * Apideck service provider associated with request.
**/
export class LogService extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}

export enum LogUnifiedApiEnum {
    Crm = "crm"
,    Lead = "lead"
,    Proxy = "proxy"
,    Vault = "vault"
,    Accounting = "accounting"
,    Hris = "hris"
,    Ats = "ats"
,    Pos = "pos"
,    FileStorage = "file-storage"
,    Sms = "sms"
}


export class Log extends SpeakeasyBase {
  @Metadata({ data: "json, name=api_style" })
  apiStyle: string;

  @Metadata({ data: "json, name=base_url" })
  baseUrl: string;

  @Metadata({ data: "json, name=child_request" })
  childRequest: boolean;

  @Metadata({ data: "json, name=consumer_id" })
  consumerId: string;

  @Metadata({ data: "json, name=duration" })
  duration: number;

  @Metadata({ data: "json, name=error_message" })
  errorMessage?: string;

  @Metadata({ data: "json, name=execution" })
  execution: number;

  @Metadata({ data: "json, name=has_children" })
  hasChildren: boolean;

  @Metadata({ data: "json, name=http_method" })
  httpMethod: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=latency" })
  latency: number;

  @Metadata({ data: "json, name=operation" })
  operation: LogOperation;

  @Metadata({ data: "json, name=parent_id" })
  parentId: string;

  @Metadata({ data: "json, name=path" })
  path: string;

  @Metadata({ data: "json, name=sandbox" })
  sandbox: boolean;

  @Metadata({ data: "json, name=service" })
  service: LogService;

  @Metadata({ data: "json, name=source_ip" })
  sourceIp?: string;

  @Metadata({ data: "json, name=status_code" })
  statusCode: number;

  @Metadata({ data: "json, name=success" })
  success: boolean;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: string;

  @Metadata({ data: "json, name=unified_api" })
  unifiedApi: LogUnifiedApiEnum;
}
