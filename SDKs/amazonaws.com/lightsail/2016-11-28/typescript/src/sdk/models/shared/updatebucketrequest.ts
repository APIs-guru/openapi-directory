import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccessRules } from "./accessrules";


export class UpdateBucketRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessRules" })
  accessRules?: AccessRules;

  @Metadata({ data: "json, name=bucketName" })
  bucketName: string;

  @Metadata({ data: "json, name=readonlyAccessAccounts" })
  readonlyAccessAccounts?: string[];

  @Metadata({ data: "json, name=versioning" })
  versioning?: string;
}
