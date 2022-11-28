import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeregisterRobotResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fleet" })
  fleet?: string;

  @SpeakeasyMetadata({ data: "json, name=robot" })
  robot?: string;
}
