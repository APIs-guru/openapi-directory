import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoEntity } from "./autoentity";
import { ErrorsEntity } from "./errorsentity";


// StatusEntity
/** 
 * Test webhook.
**/
export class StatusEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=clickwrap_body" })
  clickwrapBody?: string;

  @Metadata({ data: "json, name=clickwrap_id" })
  clickwrapId?: number;

  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: AutoEntity;

  @Metadata({ data: "json, name=errors" })
  errors?: ErrorsEntity;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
