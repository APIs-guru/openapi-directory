import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Container } from "./container";


export class ListContainersOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Containers", elemType: shared.Container })
  containers: Container[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
