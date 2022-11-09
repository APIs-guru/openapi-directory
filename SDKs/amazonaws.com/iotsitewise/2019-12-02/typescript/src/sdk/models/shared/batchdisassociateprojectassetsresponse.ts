import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssetErrorDetails } from "./asseterrordetails";


export class BatchDisassociateProjectAssetsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.AssetErrorDetails })
  errors?: AssetErrorDetails[];
}
