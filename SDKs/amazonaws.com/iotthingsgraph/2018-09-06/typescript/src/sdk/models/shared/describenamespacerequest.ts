import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeNamespaceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=namespaceName" })
  namespaceName?: string;
}
