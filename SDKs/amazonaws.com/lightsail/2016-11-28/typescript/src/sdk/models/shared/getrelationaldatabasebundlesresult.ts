import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RelationalDatabaseBundle } from "./relationaldatabasebundle";


export class GetRelationalDatabaseBundlesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=bundles", elemType: shared.RelationalDatabaseBundle })
  bundles?: RelationalDatabaseBundle[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
