import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeNamespaceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=namespaceArn" })
  namespaceArn?: string;

  @Metadata({ data: "json, name=namespaceName" })
  namespaceName?: string;

  @Metadata({ data: "json, name=namespaceVersion" })
  namespaceVersion?: number;

  @Metadata({ data: "json, name=trackingNamespaceName" })
  trackingNamespaceName?: string;

  @Metadata({ data: "json, name=trackingNamespaceVersion" })
  trackingNamespaceVersion?: number;
}
