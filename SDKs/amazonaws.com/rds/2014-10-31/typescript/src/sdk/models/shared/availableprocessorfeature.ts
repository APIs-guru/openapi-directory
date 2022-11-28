import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AvailableProcessorFeature
/** 
 * <p>Contains the available processor feature information for the DB instance class of a DB instance.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html#USER_ConfigureProcessor">Configuring the Processor of the DB Instance Class</a> in the <i>Amazon RDS User Guide. </i> </p>
**/
export class AvailableProcessorFeature extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allowedValues?: string;

  @SpeakeasyMetadata()
  defaultValue?: string;

  @SpeakeasyMetadata()
  name?: string;
}
