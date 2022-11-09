import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeContainerInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContainerName" })
  containerName?: string;
}
