import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthTypeEnum } from "./authtypeenum";


export enum ConsumerConnectionStateEnum {
    Available = "available",
    Callable = "callable",
    Added = "added",
    Configured = "configured",
    Authorized = "authorized"
}


export class ConsumerConnection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auth_type" })
  authType?: AuthTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=consumer_id" })
  consumerId?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=icon" })
  icon?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=logo" })
  logo?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=service_id" })
  serviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ConsumerConnectionStateEnum;

  @SpeakeasyMetadata({ data: "json, name=tag_line" })
  tagLine?: string;

  @SpeakeasyMetadata({ data: "json, name=unified_api" })
  unifiedApi?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=website" })
  website?: string;
}
