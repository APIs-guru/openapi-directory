import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RdsDbInstance
/** 
 * Describes an Amazon RDS instance.
**/
export class RdsDbInstance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=DbInstanceIdentifier" })
  dbInstanceIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=DbPassword" })
  dbPassword?: string;

  @SpeakeasyMetadata({ data: "json, name=DbUser" })
  dbUser?: string;

  @SpeakeasyMetadata({ data: "json, name=Engine" })
  engine?: string;

  @SpeakeasyMetadata({ data: "json, name=MissingOnRds" })
  missingOnRds?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RdsDbInstanceArn" })
  rdsDbInstanceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=StackId" })
  stackId?: string;
}
