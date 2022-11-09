import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeWorkspaceBundlesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=BundleIds" })
  bundleIds?: string[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Owner" })
  owner?: string;
}
