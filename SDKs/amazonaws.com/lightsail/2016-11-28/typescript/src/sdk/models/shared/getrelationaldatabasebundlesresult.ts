import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RelationalDatabaseBundle } from "./relationaldatabasebundle";



export class GetRelationalDatabaseBundlesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bundles", elemType: RelationalDatabaseBundle })
  bundles?: RelationalDatabaseBundle[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
