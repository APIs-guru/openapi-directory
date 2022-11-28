import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Container } from "./container";



export class ListContainersOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Containers", elemType: Container })
  containers: Container[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
