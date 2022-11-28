import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeNamespaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=namespaceArn" })
  namespaceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=namespaceName" })
  namespaceName?: string;

  @SpeakeasyMetadata({ data: "json, name=namespaceVersion" })
  namespaceVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=trackingNamespaceName" })
  trackingNamespaceName?: string;

  @SpeakeasyMetadata({ data: "json, name=trackingNamespaceVersion" })
  trackingNamespaceVersion?: number;
}
