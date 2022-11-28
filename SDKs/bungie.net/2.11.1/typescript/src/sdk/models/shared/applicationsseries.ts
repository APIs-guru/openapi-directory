import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationsDatapoint } from "./applicationsdatapoint";



export class ApplicationsSeries extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ApplicationsDatapoint })
  datapoints?: ApplicationsDatapoint[];

  @SpeakeasyMetadata()
  target?: string;
}
