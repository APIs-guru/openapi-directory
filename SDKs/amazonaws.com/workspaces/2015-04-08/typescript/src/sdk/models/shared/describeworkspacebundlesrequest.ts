import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeWorkspaceBundlesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BundleIds" })
  bundleIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Owner" })
  owner?: string;
}
