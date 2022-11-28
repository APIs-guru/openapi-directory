import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BasicScaling
/** 
 * A service with basic scaling will create an instance when the application receives a request. The instance will be turned down when the app becomes idle. Basic scaling is ideal for work that is intermittent or driven by user activity.
**/
export class BasicScaling extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=idleTimeout" })
  idleTimeout?: string;

  @SpeakeasyMetadata({ data: "json, name=maxInstances" })
  maxInstances?: number;
}
