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
// BlockPublicAccess
/**
 * Provides information about the block public access settings for an S3 bucket. These settings can apply to a bucket at the account level or bucket level. For detailed information about each setting, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-block-public-access.html">Blocking public access to your Amazon S3 storage</a> in the <i>Amazon Simple Storage Service User Guide</i>.
**/
var BlockPublicAccess = /** @class */ (function (_super) {
    __extends(BlockPublicAccess, _super);
    function BlockPublicAccess() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blockPublicAcls" }),
        __metadata("design:type", Boolean)
    ], BlockPublicAccess.prototype, "blockPublicAcls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blockPublicPolicy" }),
        __metadata("design:type", Boolean)
    ], BlockPublicAccess.prototype, "blockPublicPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ignorePublicAcls" }),
        __metadata("design:type", Boolean)
    ], BlockPublicAccess.prototype, "ignorePublicAcls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=restrictPublicBuckets" }),
        __metadata("design:type", Boolean)
    ], BlockPublicAccess.prototype, "restrictPublicBuckets", void 0);
    return BlockPublicAccess;
}(SpeakeasyBase));
export { BlockPublicAccess };
