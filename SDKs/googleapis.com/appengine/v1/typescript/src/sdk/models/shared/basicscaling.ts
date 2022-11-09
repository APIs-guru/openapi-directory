import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BasicScaling
/** 
 * A service with basic scaling will create an instance when the application receives a request. The instance will be turned down when the app becomes idle. Basic scaling is ideal for work that is intermittent or driven by user activity.
**/
export class BasicScaling extends SpeakeasyBase {
  @Metadata({ data: "json, name=idleTimeout" })
  idleTimeout?: string;

  @Metadata({ data: "json, name=maxInstances" })
  maxInstances?: number;
}
