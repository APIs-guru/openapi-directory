import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeContainerInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContainerName" })
  containerName?: string;
}
