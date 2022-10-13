package shared

type AppTypeEnum string

const (
	AppTypeEnumJupyterServer AppTypeEnum = "JupyterServer"
	AppTypeEnumKernelGateway AppTypeEnum = "KernelGateway"
	AppTypeEnumTensorBoard   AppTypeEnum = "TensorBoard"
)
