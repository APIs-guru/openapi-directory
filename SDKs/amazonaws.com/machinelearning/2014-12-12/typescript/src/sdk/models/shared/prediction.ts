import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Prediction
/** 
 * <p>The output from a <code>Predict</code> operation: </p> <ul> <li> <p> <code>Details</code> - Contains the following attributes: <code>DetailsAttributes.PREDICTIVE_MODEL_TYPE - REGRESSION | BINARY | MULTICLASS</code> <code>DetailsAttributes.ALGORITHM - SGD</code> </p> </li> <li> <p> <code>PredictedLabel</code> - Present for either a <code>BINARY</code> or <code>MULTICLASS</code> <code>MLModel</code> request. </p> </li> <li> <p> <code>PredictedScores</code> - Contains the raw classification score corresponding to each label. </p> </li> <li> <p> <code>PredictedValue</code> - Present for a <code>REGRESSION</code> <code>MLModel</code> request. </p> </li> </ul>
**/
export class Prediction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=predictedLabel" })
  predictedLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=predictedScores" })
  predictedScores?: Map<string, number>;

  @SpeakeasyMetadata({ data: "json, name=predictedValue" })
  predictedValue?: number;
}
