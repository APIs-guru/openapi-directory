var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Usd } from "./usd";
// PublicWorkforceTaskPrice
/**
 * <p>Defines the amount of money paid to an Amazon Mechanical Turk worker for each task performed. </p> <p>Use one of the following prices for bounding box tasks. Prices are in US dollars and should be based on the complexity of the task; the longer it takes in your initial testing, the more you should offer.</p> <ul> <li> <p>0.036</p> </li> <li> <p>0.048</p> </li> <li> <p>0.060</p> </li> <li> <p>0.072</p> </li> <li> <p>0.120</p> </li> <li> <p>0.240</p> </li> <li> <p>0.360</p> </li> <li> <p>0.480</p> </li> <li> <p>0.600</p> </li> <li> <p>0.720</p> </li> <li> <p>0.840</p> </li> <li> <p>0.960</p> </li> <li> <p>1.080</p> </li> <li> <p>1.200</p> </li> </ul> <p>Use one of the following prices for image classification, text classification, and custom tasks. Prices are in US dollars.</p> <ul> <li> <p>0.012</p> </li> <li> <p>0.024</p> </li> <li> <p>0.036</p> </li> <li> <p>0.048</p> </li> <li> <p>0.060</p> </li> <li> <p>0.072</p> </li> <li> <p>0.120</p> </li> <li> <p>0.240</p> </li> <li> <p>0.360</p> </li> <li> <p>0.480</p> </li> <li> <p>0.600</p> </li> <li> <p>0.720</p> </li> <li> <p>0.840</p> </li> <li> <p>0.960</p> </li> <li> <p>1.080</p> </li> <li> <p>1.200</p> </li> </ul> <p>Use one of the following prices for semantic segmentation tasks. Prices are in US dollars.</p> <ul> <li> <p>0.840</p> </li> <li> <p>0.960</p> </li> <li> <p>1.080</p> </li> <li> <p>1.200</p> </li> </ul> <p>Use one of the following prices for Textract AnalyzeDocument Important Form Key Amazon Augmented AI review tasks. Prices are in US dollars.</p> <ul> <li> <p>2.400 </p> </li> <li> <p>2.280 </p> </li> <li> <p>2.160 </p> </li> <li> <p>2.040 </p> </li> <li> <p>1.920 </p> </li> <li> <p>1.800 </p> </li> <li> <p>1.680 </p> </li> <li> <p>1.560 </p> </li> <li> <p>1.440 </p> </li> <li> <p>1.320 </p> </li> <li> <p>1.200 </p> </li> <li> <p>1.080 </p> </li> <li> <p>0.960 </p> </li> <li> <p>0.840 </p> </li> <li> <p>0.720 </p> </li> <li> <p>0.600 </p> </li> <li> <p>0.480 </p> </li> <li> <p>0.360 </p> </li> <li> <p>0.240 </p> </li> <li> <p>0.120 </p> </li> <li> <p>0.072 </p> </li> <li> <p>0.060 </p> </li> <li> <p>0.048 </p> </li> <li> <p>0.036 </p> </li> <li> <p>0.024 </p> </li> <li> <p>0.012 </p> </li> </ul> <p>Use one of the following prices for Rekognition DetectModerationLabels Amazon Augmented AI review tasks. Prices are in US dollars.</p> <ul> <li> <p>1.200 </p> </li> <li> <p>1.080 </p> </li> <li> <p>0.960 </p> </li> <li> <p>0.840 </p> </li> <li> <p>0.720 </p> </li> <li> <p>0.600 </p> </li> <li> <p>0.480 </p> </li> <li> <p>0.360 </p> </li> <li> <p>0.240 </p> </li> <li> <p>0.120 </p> </li> <li> <p>0.072 </p> </li> <li> <p>0.060 </p> </li> <li> <p>0.048 </p> </li> <li> <p>0.036 </p> </li> <li> <p>0.024 </p> </li> <li> <p>0.012 </p> </li> </ul> <p>Use one of the following prices for Amazon Augmented AI custom human review tasks. Prices are in US dollars.</p> <ul> <li> <p>1.200 </p> </li> <li> <p>1.080 </p> </li> <li> <p>0.960 </p> </li> <li> <p>0.840 </p> </li> <li> <p>0.720 </p> </li> <li> <p>0.600 </p> </li> <li> <p>0.480 </p> </li> <li> <p>0.360 </p> </li> <li> <p>0.240 </p> </li> <li> <p>0.120 </p> </li> <li> <p>0.072 </p> </li> <li> <p>0.060 </p> </li> <li> <p>0.048 </p> </li> <li> <p>0.036 </p> </li> <li> <p>0.024 </p> </li> <li> <p>0.012 </p> </li> </ul>
**/
var PublicWorkforceTaskPrice = /** @class */ (function (_super) {
    __extends(PublicWorkforceTaskPrice, _super);
    function PublicWorkforceTaskPrice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AmountInUsd" }),
        __metadata("design:type", Usd)
    ], PublicWorkforceTaskPrice.prototype, "amountInUsd", void 0);
    return PublicWorkforceTaskPrice;
}(SpeakeasyBase));
export { PublicWorkforceTaskPrice };
