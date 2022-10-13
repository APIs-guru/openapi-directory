package shared

type ImageDetailConfig struct {
	ArgsEscaped  *bool    `json:"ArgsEscaped"`
	AttachStderr *bool    `json:"AttachStderr"`
	AttachStdin  *bool    `json:"AttachStdin"`
	AttachStdout *bool    `json:"AttachStdout"`
	Cmd          []string `json:"Cmd"`
	Domainmame   *string  `json:"Domainmame"`
	Entrypoint   *string  `json:"Entrypoint"`
	Env          []string `json:"Env"`
	ExposedPorts []string `json:"ExposedPorts"`
	Hostname     *string  `json:"Hostname"`
	Image        *string  `json:"Image"`
	Labels       []string `json:"Labels"`
	OnBuild      []string `json:"OnBuild"`
	OpenStdin    *bool    `json:"OpenStdin"`
	StdinOnce    *bool    `json:"StdinOnce"`
	Tty          *bool    `json:"Tty"`
	User         *string  `json:"User"`
	Volumes      *string  `json:"Volumes"`
	WorkingDir   *string  `json:"WorkingDir"`
}

type ImageDetail struct {
	Architecture    *string            `json:"Architecture"`
	Config          *ImageDetailConfig `json:"Config"`
	Container       *string            `json:"Container"`
	ContainerConfig *interface{}       `json:"ContainerConfig"`
	Created         *string            `json:"Created"`
	DockerVersion   *string            `json:"DockerVersion"`
	ID              *string            `json:"Id"`
	Os              *string            `json:"Os"`
	Parent          *string            `json:"Parent"`
	Size            *int32             `json:"Size"`
	Tag             *string            `json:"Tag"`
	Throwaway       *string            `json:"Throwaway"`
	VirtualSize     *int32             `json:"VirtualSize"`
}
