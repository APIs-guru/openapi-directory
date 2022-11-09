import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteNamespaceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=namespaceArn" })
  namespaceArn?: string;

  @Metadata({ data: "json, name=namespaceName" })
  namespaceName?: string;
}
