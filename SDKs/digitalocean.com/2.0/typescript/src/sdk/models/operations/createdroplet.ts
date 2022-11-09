import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateDropletRequestBodySingleDropletRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=backups" })
  backups?: boolean;

  @Metadata({ data: "json, name=image" })
  image: any;

  @Metadata({ data: "json, name=ipv6" })
  ipv6?: boolean;

  @Metadata({ data: "json, name=monitoring" })
  monitoring?: boolean;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=private_networking" })
  privateNetworking?: boolean;

  @Metadata({ data: "json, name=region" })
  region: string;

  @Metadata({ data: "json, name=size" })
  size: string;

  @Metadata({ data: "json, name=ssh_keys" })
  sshKeys?: any[];

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=user_data" })
  userData?: string;

  @Metadata({ data: "json, name=vpc_uuid" })
  vpcUuid?: string;

  @Metadata({ data: "json, name=with_droplet_agent" })
  withDropletAgent?: boolean;
}


export class CreateDropletRequestBodyMultipleDropletRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=backups" })
  backups?: boolean;

  @Metadata({ data: "json, name=image" })
  image: any;

  @Metadata({ data: "json, name=ipv6" })
  ipv6?: boolean;

  @Metadata({ data: "json, name=monitoring" })
  monitoring?: boolean;

  @Metadata({ data: "json, name=names" })
  names: string[];

  @Metadata({ data: "json, name=private_networking" })
  privateNetworking?: boolean;

  @Metadata({ data: "json, name=region" })
  region: string;

  @Metadata({ data: "json, name=size" })
  size: string;

  @Metadata({ data: "json, name=ssh_keys" })
  sshKeys?: any[];

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=user_data" })
  userData?: string;

  @Metadata({ data: "json, name=vpc_uuid" })
  vpcUuid?: string;

  @Metadata({ data: "json, name=with_droplet_agent" })
  withDropletAgent?: boolean;
}


export class CreateDropletRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class CreateDroplet401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class CreateDropletResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  createDroplet202ApplicationJsonOneOf?: any;

  @Metadata()
  createDroplet401ApplicationJsonObject?: CreateDroplet401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
