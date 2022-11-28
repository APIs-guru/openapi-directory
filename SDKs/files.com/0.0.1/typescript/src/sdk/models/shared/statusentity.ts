import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoEntity } from "./autoentity";
import { ErrorsEntity } from "./errorsentity";



// StatusEntity
/** 
 * Test webhook.
**/
export class StatusEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clickwrap_body" })
  clickwrapBody?: string;

  @SpeakeasyMetadata({ data: "json, name=clickwrap_id" })
  clickwrapId?: number;

  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: AutoEntity;

  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: ErrorsEntity;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
