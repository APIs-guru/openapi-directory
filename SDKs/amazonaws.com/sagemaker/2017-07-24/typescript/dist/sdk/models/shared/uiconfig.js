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
// UiConfig
/**
 * <p>Provided configuration information for the worker UI for a labeling job. Provide either <code>HumanTaskUiArn</code> or <code>UiTemplateS3Uri</code>.</p> <p>For named entity recognition, 3D point cloud and video frame labeling jobs, use <code>HumanTaskUiArn</code>.</p> <p>For all other Ground Truth built-in task types and custom task types, use <code>UiTemplateS3Uri</code> to specify the location of a worker task template in Amazon S3.</p>
**/
var UiConfig = /** @class */ (function (_super) {
    __extends(UiConfig, _super);
    function UiConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HumanTaskUiArn" }),
        __metadata("design:type", String)
    ], UiConfig.prototype, "humanTaskUiArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UiTemplateS3Uri" }),
        __metadata("design:type", String)
    ], UiConfig.prototype, "uiTemplateS3Uri", void 0);
    return UiConfig;
}(SpeakeasyBase));
export { UiConfig };
