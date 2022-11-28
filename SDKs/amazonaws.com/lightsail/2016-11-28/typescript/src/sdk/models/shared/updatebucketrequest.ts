import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessRules } from "./accessrules";



export class UpdateBucketRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessRules" })
  accessRules?: AccessRules;

  @SpeakeasyMetadata({ data: "json, name=bucketName" })
  bucketName: string;

  @SpeakeasyMetadata({ data: "json, name=readonlyAccessAccounts" })
  readonlyAccessAccounts?: string[];

  @SpeakeasyMetadata({ data: "json, name=versioning" })
  versioning?: string;
}
