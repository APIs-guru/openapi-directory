import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeNamespaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=namespaceName" })
  namespaceName?: string;
}
