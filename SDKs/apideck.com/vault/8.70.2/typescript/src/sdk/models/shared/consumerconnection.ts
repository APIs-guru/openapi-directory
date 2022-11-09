import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthTypeEnum } from "./authtypeenum";

export enum ConsumerConnectionStateEnum {
    Available = "available"
,    Callable = "callable"
,    Added = "added"
,    Configured = "configured"
,    Authorized = "authorized"
}


export class ConsumerConnection extends SpeakeasyBase {
  @Metadata({ data: "json, name=auth_type" })
  authType?: AuthTypeEnum;

  @Metadata({ data: "json, name=consumer_id" })
  consumerId?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=icon" })
  icon?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=logo" })
  logo?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=service_id" })
  serviceId?: string;

  @Metadata({ data: "json, name=settings" })
  settings?: Map<string, any>;

  @Metadata({ data: "json, name=state" })
  state?: ConsumerConnectionStateEnum;

  @Metadata({ data: "json, name=tag_line" })
  tagLine?: string;

  @Metadata({ data: "json, name=unified_api" })
  unifiedApi?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: string;

  @Metadata({ data: "json, name=website" })
  website?: string;
}
