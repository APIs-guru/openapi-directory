import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationsSeries } from "./applicationsseries";



export class ApplicationsApiUsage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ApplicationsSeries })
  apiCalls?: ApplicationsSeries[];

  @SpeakeasyMetadata({ elemType: ApplicationsSeries })
  throttledRequests?: ApplicationsSeries[];
}
