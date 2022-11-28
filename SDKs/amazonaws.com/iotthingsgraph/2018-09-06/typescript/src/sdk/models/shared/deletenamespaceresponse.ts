import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteNamespaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=namespaceArn" })
  namespaceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=namespaceName" })
  namespaceName?: string;
}
