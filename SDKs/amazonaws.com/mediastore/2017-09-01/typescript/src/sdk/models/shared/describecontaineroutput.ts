import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Container } from "./container";


export class DescribeContainerOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Container" })
  container?: Container;
}
