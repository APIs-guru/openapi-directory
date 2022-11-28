import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApigatewayStatus } from "./apigatewaystatus";



// ApigatewayOperation
/** 
 * This resource represents a long-running operation that is the result of a network API call.
**/
export class ApigatewayOperation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=done" })
  done?: boolean;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: ApigatewayStatus;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=response" })
  response?: Map<string, any>;
}
