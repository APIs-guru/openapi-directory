import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArchitectureEnum } from "./architectureenum";



export class CreateRobotResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=architecture" })
  architecture?: ArchitectureEnum;

  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=greengrassGroupId" })
  greengrassGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
